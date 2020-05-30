import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className="error">
            <div className="center text-center">
                <h5>CAD Design and Structural</h5><br /><br />
                <p className="text-muted small">We just don't build homes, we build communities</p><br /><br />
                <Link to="/" className="btn btn-outline-white text-white">
                    <small>
                        Vist home page
                        </small></Link>

            </div>
        </div>
    )
}

export default Error
