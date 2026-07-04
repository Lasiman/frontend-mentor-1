import React from 'react'

const HeroContent = ({children, nama, no, image, judul, teks, variant}) => {

    const gambar = image
    return (
        <div>
            <div className={`${variant === 'red' ? 'text-terracotta-600' : variant === 'blue' ? 'text-blue-500' : 'text-rose-500'}`}>
                <div>
                    <div>
                        <img src={gambar} />
                    </div>
                    <p></p>
                </div>
                <p></p>
            </div>
            <div></div>
            {children}
        </div>
    )
}

export default HeroContent
