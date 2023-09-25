import React from 'react'


const SpinnerIcon = () =>
{

    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{margin: "auto", background: "none", display: "blockStatement", shapeRendering: "auto", animationPlaySate: "running", animationDelay: "0s"}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <rect x="19" y="19" width="20" height="20" fill="#1d3f72" style={{animationPlayState: "running", animationDelay: "0s"}}>
                <animate attributeName="fill" values="#5699d2;#1d3f72;#1d3f72" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0s" calcMode="discrete" style={{animationPlayState: "running", animationDelay: "0s"}}></animate>
            </rect><rect x="40" y="19" width="20" height="20" fill="#1d3f72" style={{animationPlayState: "running", animationDelay: "0s"}}>
                <animate attributeName="fill" values="#5699d2;#1d3f72;#1d3f72" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.125s" calcMode="discrete" style={{animationPlayState: "running", animationDelay: "0s"}}></animate>
            </rect><rect x="61" y="19" width="20" height="20" fill="#1d3f72" style={{animationPlayState: "running", animationDelay: "0s"}}>
                <animate attributeName="fill" values="#5699d2;#1d3f72;#1d3f72" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.25s" calcMode="discrete" style={{animationPlayState: "running", animationDelay: "0s"}}></animate>
            </rect><rect x="19" y="40" width="20" height="20" fill="#1d3f72" style={{animationPlayState: "running", animationDelay: "0s"}}>
                <animate attributeName="fill" values="#5699d2;#1d3f72;#1d3f72" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.875s" calcMode="discrete" style={{animationPlayState: "running", animationDelay: "0s"}}></animate>
            </rect><rect x="61" y="40" width="20" height="20" fill="#1d3f72" style={{animationPlayState: "running", animationDelay: "0s"}}>
                <animate attributeName="fill" values="#5699d2;#1d3f72;#1d3f72" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.375s" calcMode="discrete" style={{animationPlayState: "running", animationDelay: "0s"}}></animate>
            </rect><rect x="19" y="61" width="20" height="20" fill="#1d3f72" style={{animationPlayState: "running", animationDelay: "0s"}}>
                <animate attributeName="fill" values="#5699d2;#1d3f72;#1d3f72" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.75s" calcMode="discrete" style={{animationPlayState: "running", animationDelay: "0s"}}></animate>
            </rect><rect x="40" y="61" width="20" height="20" fill="#1d3f72" style={{animationPlayState: "running", animationDelay: "0s"}}>
                <animate attributeName="fill" values="#5699d2;#1d3f72;#1d3f72" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.625s" calcMode="discrete" style={{animationPlayState: "running", animationDelay: "0s"}}></animate>
            </rect><rect x="61" y="61" width="20" height="20" fill="#1d3f72" style={{animationPlayState: "running", animationDelay: "0s"}}>
                <animate attributeName="fill" values="#5699d2;#1d3f72;#1d3f72" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.5s" calcMode="discrete" style={{animationPlayState: "running", animationDelay: "0s"}}></animate>
            </rect>
        </svg>
    )
}
export default SpinnerIcon