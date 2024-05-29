import { useEffect, useRef } from 'react';
import Icons from '../assets/icons/custom-icons.svg';

function PomIcon({ icon,className } : 
    { icon: string, className: string }) {

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const svg = createSvgElement();
        const svgContainer = containerRef.current;
        if(svgContainer) {
            svgContainer.innerHTML = '';
            svgContainer.appendChild(svg);
        }

    },[icon]);

    function createSvgElement(): SVGSVGElement {
        const NS = 'http://www.w3.org/2000/svg';
        const svgElement = document.createElementNS(NS,'svg');

        const fill = 'currentColor';
        const viewBox = '0 -960 960 960';

        svgElement.setAttribute('xmlns','http://www.w3.org/2000/svg');
        svgElement.setAttribute('fill',fill);
        svgElement.setAttribute('viewBox',viewBox);

        const useElement = document.createElementNS(NS,'use');
        useElement.setAttribute('href', `${Icons}#${icon}`);
        svgElement.appendChild(useElement);

        return svgElement;
    }

    return <>
        <div ref={containerRef} className={className}>
        </div>
    </> }

export default PomIcon;
