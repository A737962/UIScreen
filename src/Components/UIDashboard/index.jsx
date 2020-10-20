import React from 'react';
import DBFaq from './DBFaq';
import DBAccountHistory from './DBAccountHistory/index';
import DBVideos from './DBVideos/index';
import './UIDashboard.css'

export default function UIDashboard() {
    return (
        <div>
            <div className="row">
                    
                    <DBFaq/>
                    <DBVideos/>
            </div>
        </div>
    )
}
