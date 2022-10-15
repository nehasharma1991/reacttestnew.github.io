import React from 'react'
import { Link } from 'react-router-dom'
export default function Subheader(props) {
  return (
   <>
    <div className="pager-header">
            <div className="container">
                <div className="page-content">
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to ="/">Home</Link></li>
                        <li className="breadcrumb-item active">{props.link}</li>
                    </ol>
                </div>
            </div>
        </div>
   </>
  )
}
