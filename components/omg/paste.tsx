const Paste = (props: { url: string; width?: string; height?: string }) => {
    const { url, width, height } = props
    return (
        <iframe
            title={url}
            style={{ width: `${width || '100%'}`, height: `${height || '20em'}` }}
            src={url}
        ></iframe>
    )
}

export default Paste
