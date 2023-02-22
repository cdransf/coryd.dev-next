export default async function handler(req, res) {
    const KEY = process.env.API_KEY_OMG
    const PASTE = req.query.paste
    const EDIT_TYPE = req.query.editType
    const CONTENT = req.query.content

    if (!EDIT_TYPE) {
        fetch('https://api.omg.lol/address/cory/pastebin/', {
            method: 'post',
            headers: {
                Authorization: `Bearer ${KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: PASTE, content: CONTENT }),
        })
        res.status(200).json({ success: true })
    } else {
        const pasteContent = await fetch(`https://api.omg.lol/address/cory/pastebin/${PASTE}`).then(
            (response) => response.json()
        )
        const data = {
            title: PASTE,
            content:
                EDIT_TYPE === 'prepend'
                    ? `${CONTENT}\n` + pasteContent.response.paste.content
                    : pasteContent.response.paste.content + `\n${CONTENT}`,
        }

        fetch('https://api.omg.lol/address/cory/pastebin/', {
            method: 'post',
            headers: {
                Authorization: `Bearer ${KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        res.status(200).json({ success: true })
    }
}
