import React from "react";
import { Link } from "react-router-dom";
import CityNavVertical from '../../components/CityNav/CityNavVertical';
import DestinationCategoryBar from "../../components/CityNav/DestinationCategoryBar";
import "../../styles/PageStyle/Destinationspage.css";

export default function PlanPage() {
    return (
        <div className="diva">
            <div className="des-left-page">
                <div className="des-text"> 지역 </div>
                 <CityNavVertical />
            </div>
            <div className="des-center-page">
            <div className="plan-text"> 플랜 </div>
                <DestinationCategoryBar />
                <div className='d-list'>
                    <div className='d-0'>카테고리별 1순위 플랜</div>
                    <div className="d-3">
                        <div className="d-list">
                            <div className='d-1'>여행지1</div>
                            <div className='d-1'>여행지2</div>            
                        </div>
                        <div className="d-list">
                            <div className='d-1'>여행지3</div>
                            <div className='d-1'>여행지4</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
