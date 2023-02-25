import * as React from 'react'

const Logo = (props) => (
    <svg
        width={53}
        height={53}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <image
            width={53}
            height={53}
            xlinkHref="data:image/png;base64, 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"
        />
    </svg>
)

export default Logo