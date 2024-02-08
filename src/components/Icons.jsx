import React from 'react';
import { iconPaths } from './IconPaths';
import './Icons.css'

const Icon = ({ icon, color = 'currentcolor', gradient, size }) => {
    const iconPath = iconPaths[icon];
    const attrs = size ? { style: { '--size': size } } : {};
    const gradientId = React.useMemo(() => 'icon-gradient-' + Math.round(Math.random() * 10e12).toString(36), []);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 256 256"
            aria-hidden="true"
            stroke={gradient ? `url(#${gradientId})` : color}
            fill={gradient ? `url(#${gradientId})` : color}
            {...attrs}
        >
            <g dangerouslySetInnerHTML={{ __html: iconPath }} />
            {gradient && (
                <linearGradient
                    id={gradientId}
                    x1="23"
                    x2="235"
                    y1="43"
                    y2="202"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="var(--gradient-stop-1)" />
                    <stop offset=".5" stopColor="var(--gradient-stop-2)" />
                    <stop offset="1" stopColor="var(--gradient-stop-3)" />
                </linearGradient>
            )}
        </svg>
    );
};

export default Icon;