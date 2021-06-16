import React from 'react'

export const CreationsCard = ({title, img, type}) => {

    return (
        <div className="creations-card">
            <img src={img} alt={title} />
            <span className={`title ${type}`}>{title}</span>
        </div>
    )
}
