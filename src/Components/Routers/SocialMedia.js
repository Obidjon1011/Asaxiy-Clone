import React from 'react'

export default function SocialMedia() {
    return (
        <div className="accordion mt-5 shadow sm_none" id="accordionExample">
            <div className="accordion-item ">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Telegram
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show social" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body pad">
                    <iframe className='if' src='https://xn--r1a.website/s/asaxiyuz'  title='icode Academy '></iframe>
                </div>
                </div>
            </div>
        </div>
    )
}
