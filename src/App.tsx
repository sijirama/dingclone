import React, { useEffect, useState } from 'react';
import { FaFont, FaSave, FaCopy, FaImage } from 'react-icons/fa';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { FabricImage, FabricObject, Textbox } from 'fabric';
import FontFaceObserver from 'fontfaceobserver';
import { ObjectMenu } from './components/ObjectMenu';

const fonts = ["Times New Roman"]
export type EditorModes = "normal" | "eraser" | "segment"

const App = () => {
    const { editor, onReady } = useFabricJSEditor();
    const [selectedFont, setSelectedFont] = useState('Times New Roman');

    const [editorMode, setEditorMode] = useState<EditorModes>("normal")

    const [menuPosition, setMenuPosition] = useState<{ x: number, y: number } | null>(null);
    const [selectedObject, setSelectedObject] = useState<FabricObject | null>(null);

    useEffect(() => {
        if (!editor?.canvas) return;

        const canvas = editor.canvas;

        const handleMouseDown = (options: any) => {
            if (editorMode === "eraser" && options.target) {
                //canvas.remove(options.target);
            }
        };

        canvas.on('mouse:down', handleMouseDown);

        return () => {
            canvas.off('mouse:down', handleMouseDown);
        };
    }, [editorMode, editor])

    useEffect(() => {
        const loadFonts = async () => {
            for (const font of fonts) {
                if (font !== 'Times New Roman') {
                    const fontObserver = new FontFaceObserver(font);
                    try {
                        await fontObserver.load();
                    } catch (e) {
                        console.error(`Font loading failed for ${font}:`, e);
                    }
                }
            }
        };
        loadFonts();
    }, []);

    useEffect(() => {
        if (!editor?.canvas) return;

        const updateMenuPosition = (object: FabricObject) => {
            const { left, top } = object.getBoundingRect();
            setMenuPosition({
                x: left,
                y: top, // Adjust to position above the object
            });
        };

        const handleObjectMoving = (event: any) => {
            if (event.target) {
                updateMenuPosition(event.target);
            }
        };

        // Function to handle object selection
        const handleObjectClick = (event: any) => {
            const { target } = event;
            if (target) {
                //const { left, top, width } = target.getBoundingRect();
                setSelectedObject(target);
                updateMenuPosition(target);
                // setMenuPosition({
                //     x: left,
                //     y: top,  // Adjust to position above the object
                // });
            } else {
                setMenuPosition(null);
                setSelectedObject(null);
            }
        };

        editor.canvas.on("object:scaling", handleObjectMoving)
        editor.canvas.on('object:moving', handleObjectMoving);
        editor.canvas.on('mouse:down', handleObjectClick);

        return () => {
            editor.canvas.off('mouse:down', handleObjectClick);
            editor.canvas.off('object:moving', handleObjectMoving);
        };

    }, [editor]);

    useEffect(() => {

        const handleKeyDown = (e: KeyboardEvent) => {
            if (!editor?.canvas) return;
            const activeObject = editor.canvas.getActiveObject();

            if (e.key === 'Delete') {
                if (activeObject) {
                    editor.deleteSelected()
                    editor.canvas.remove(activeObject);
                    editor.canvas.discardActiveObject();
                    editor.canvas.requestRenderAll();
                }
            }

            if (e.key === 'd' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                if (activeObject) {
                    activeObject.clone().then((cloned) => {
                        editor.canvas.discardActiveObject()
                        cloned.set({
                            left: activeObject.left + 10,
                            top: activeObject.top + 10,
                        });
                        //if(cloned.type === "Active")
                        editor.canvas.add(cloned);
                        editor.canvas.setActiveObject(cloned);
                        editor.canvas.requestRenderAll();

                    })
                }
            }

        };

        window.addEventListener("paste", (e) => {
            const items = e.clipboardData?.items || []
            for (let i = 0; i < items?.length; i++) {
                if (items[i].type.indexOf('image') !== -1) {
                    const blob = items[i].getAsFile();
                    const reader = new FileReader();
                    reader.onload = (event: ProgressEvent<FileReader>) => {
                        const imgObj = new Image();
                        imgObj.src = event.target?.result as string;
                        imgObj.onload = () => {
                            const fabricImage = new FabricImage(imgObj, {
                                scaleX: 0.5,
                                scaleY: 0.5,
                                left: 50,
                                top: 50
                            });
                            editor?.canvas.add(fabricImage);
                        };
                    };
                    reader.readAsDataURL(blob as Blob);
                }
            }
        })

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);

    }, [editor]);

    const onAddText = () => {
        editor?.canvas.add(new Textbox("Hello world", {
            left: 50,
            top: 50,
            fontFamily: selectedFont,
            fill: '#000000',
            fontSize: 20,
            width: 30,
            lockRotation: true
        }));
    };

    const onSaveImage = () => {
        const canvas = editor?.canvas;
        if (canvas) {
            const dataURL = canvas.toDataURL({
                format: 'jpeg',
                quality: 1,
                multiplier: 1
            });
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'canvas-image.png';
            link.click();
        }
    };

    const onCopyImage = () => {
        const canvas = editor?.canvas;
        if (canvas) {
            canvas.getElement().toBlob((blob) => {
                if (blob) {
                    navigator.clipboard.write([
                        new ClipboardItem({ 'image/png': blob })
                    ]);
                }
            });
        }
    };

    const onAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                const imgObj = new Image();
                imgObj.src = event.target?.result as string;
                imgObj.onload = () => {
                    const fabricImage = new FabricImage(imgObj, {
                        scaleX: 0.4,
                        scaleY: 0.4,
                        left: 50,
                        top: 50,
                        lockRotation: true
                    });
                    editor?.canvas.add(fabricImage);
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFont(e.target.value);
        const activeObject = editor?.canvas.getActiveObject();
        if (activeObject && activeObject.type === 'text') {
            activeObject.set('fontFamily', e.target.value);
            editor?.canvas.requestRenderAll();
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-200">
            <div className="bg-gray-300 border-b-2 border-gray-400 p-2 flex flex-wrap justify-start gap-2">
                <button onClick={onAddText} className="px-3 py-1 bg-gray-100 text-black border-2 border-gray-400 hover:bg-gray-200 transition-colors flex items-center">
                    <FaFont className="mr-2" />
                    Text
                </button>
                <button onClick={onSaveImage} className="px-3 py-1 bg-gray-100 text-black border-2 border-gray-400 hover:bg-gray-200 transition-colors flex items-center">
                    <FaSave className="mr-2" />
                    Save
                </button>
                <button onClick={onCopyImage} className="px-3 py-1 bg-gray-100 text-black border-2 border-gray-400 hover:bg-gray-200 transition-colors flex items-center">
                    <FaCopy className="mr-2" />
                    Copy
                </button>
                <label className="px-3 py-1 bg-gray-100 text-black border-2 border-gray-400 hover:bg-gray-200 transition-colors flex items-center cursor-pointer">
                    <FaImage className="mr-2" />
                    Image
                    <input type="file" className="hidden" onChange={onAddImage} accept="image/*" />
                </label>
                <select
                    value={selectedFont}
                    onChange={handleFontChange}
                    className="px-3 py-1 bg-gray-100 text-black border-2 border-gray-400"
                >
                    {fonts.map(font => (
                        <option key={font} value={font}>{font}</option>
                    ))}
                </select>
            </div>
            <div className="flex-grow p-4 bg-white">
                <FabricJSCanvas className="w-full h-full border-2 border-gray-100" onReady={onReady} />
                {menuPosition && (
                    <ObjectMenu
                        x={menuPosition.x}
                        y={menuPosition.y}
                        selectedObject={selectedObject}
                        editor={editor}
                        menuPosition={menuPosition}
                        setMenuPosition={setMenuPosition}
                        setEditorMode={setEditorMode}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
