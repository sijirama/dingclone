"use client"
import CustomCanvasInterface from '@/components/CustomCanvasInterface';
import EditorHotkeys from '@/components/EditorHotkeys';
import { Editor, Tldraw } from 'tldraw'
import { useCallback } from 'react';
import { MountImportImage } from '@/lib/MountImportImages';

export default function Home() {

    //INFO: this calls all the functions that will be loaded after editor mounts
    const handleMount = useCallback((editor: Editor) => {

        MountImportImage("ding.png", editor, 286, 133) // dingboard png

    }, [])


    return (
        <main className="min-h-screen">
            <div style={{ position: 'fixed', inset: 0 }}>
                <Tldraw hideUi onMount={handleMount}>
                    <EditorHotkeys />
                    <CustomCanvasInterface />
                </Tldraw>
            </div>
        </main>
    );
}
