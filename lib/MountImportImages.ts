import { AssetRecordType, Editor } from "tldraw";

export function MountImportImage(name: string, editor: Editor, imageWidth: number, imageHeight: number) {

    const { x, y } = randomizePosition(imageWidth, imageHeight);
    const assetId = AssetRecordType.createId()

    editor.createAssets([
        {
            id: assetId,
            type: 'image',
            typeName: 'asset',
            props: {
                name: name,
                src: `/default/${name}`,
                w: imageWidth,
                h: imageHeight,
                mimeType: 'image/png',
                isAnimated: false,
            },
            meta: {},
        },
    ])

    editor.createShape({
        type: 'image',
        x,
        y,
        props: {
            assetId,
            w: imageWidth,
            h: imageHeight,
        },
    })

}

function randomizePosition(imageWidth: number, imageHeight: number) {
    const maxX = window.innerWidth - imageWidth;
    const maxY = window.innerHeight - imageHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    return { x: randomX, y: randomY };
}
