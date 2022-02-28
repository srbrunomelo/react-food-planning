import { IconType } from "./types"

const IconSettings = ({ color, ...props }:IconType ) => {
  return (  
    <svg {...props } width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.0061 35.7096C14.317 36.0224 15.6589 36.1802 17.0061 36.1802C18.3504 36.1788 19.6899 36.0199 20.9973 35.7069C21.341 35.6241 21.6508 35.4375 21.8846 35.1723C22.1184 34.9071 22.2647 34.5763 22.3037 34.225L22.6033 31.503C22.6539 31.0163 22.8766 30.5636 23.2314 30.2264C23.5861 29.8892 24.0495 29.6898 24.5382 29.6639C24.8635 29.6497 25.187 29.7109 25.4848 29.8412L27.9727 30.9322C28.189 31.0295 28.4233 31.0806 28.6605 31.0821C28.8976 31.0836 29.1325 31.0356 29.3501 30.9411C29.569 30.848 29.7649 30.7098 29.9262 30.5352C31.7555 28.5633 33.1213 26.2077 33.9235 23.6404C34.0286 23.2998 34.0253 22.935 33.9142 22.5964C33.803 22.2577 33.5895 21.9619 33.3031 21.7498L31.0926 20.119C30.8293 19.9278 30.615 19.6769 30.4673 19.387C30.3195 19.0971 30.2425 18.7763 30.2425 18.4509C30.2425 18.1255 30.3195 17.8047 30.4673 17.5148C30.615 17.2249 30.8293 16.9741 31.0926 16.7828L33.296 15.1555C33.5832 14.943 33.7972 14.6465 33.9084 14.307C34.0196 13.9674 34.0224 13.6017 33.9165 13.2605C33.1139 10.6929 31.7465 8.3376 29.9147 6.36754C29.672 6.10812 29.3547 5.93043 29.0067 5.85899C28.6587 5.78755 28.2971 5.82588 27.9718 5.96869L25.4848 7.0642C25.2277 7.18031 24.9477 7.24147 24.664 7.24147C24.1535 7.24046 23.6613 7.05104 23.2819 6.70951C22.9024 6.36799 22.6623 5.8984 22.6077 5.3908L22.3064 2.67863C22.2678 2.32266 22.1189 1.98765 21.8805 1.7205C21.6421 1.45334 21.3262 1.2674 20.9769 1.18871C19.6761 0.898308 18.3486 0.744141 17.0159 0.728699C15.674 0.744186 14.3374 0.898641 13.0274 1.18959C12.6785 1.26784 12.3628 1.45318 12.1244 1.71969C11.886 1.98619 11.7369 2.32054 11.6979 2.67597L11.3965 5.38992C11.3397 5.89833 11.0973 6.36791 10.7158 6.70878C10.3267 7.03938 9.8357 7.22728 9.32518 7.24058C9.04353 7.24039 8.76498 7.18184 8.50709 7.06863L6.02536 5.97312C5.69901 5.82903 5.33586 5.79018 4.98641 5.86198C4.63695 5.93377 4.31854 6.11265 4.07543 6.37375C2.2461 8.34424 0.880348 10.6987 0.0780781 13.265C-0.0279039 13.606 -0.0251143 13.9716 0.0860605 14.311C0.197235 14.6504 0.411283 14.9468 0.69851 15.1591L2.9037 16.7864C3.29764 17.0775 3.57603 17.4985 3.68972 17.975C3.8034 18.4515 3.74507 18.9528 3.52502 19.3904C3.37869 19.6806 3.16616 19.9323 2.90459 20.1252L0.697624 21.7552C0.410647 21.9672 0.196748 22.2633 0.0855795 22.6024C-0.0255891 22.9414 -0.0285204 23.3067 0.0771919 23.6475C0.878041 26.2162 2.24391 28.573 4.07455 30.5449C4.31638 30.8059 4.63362 30.9849 4.98204 31.0571C5.33045 31.1292 5.6927 31.0908 6.01827 30.9473L8.51596 29.8509C8.77388 29.7375 9.05219 29.679 9.33404 29.679H9.34113C9.84974 29.6796 10.3403 29.8673 10.7195 30.2063C11.0987 30.5453 11.34 31.0119 11.3974 31.5172L11.697 34.2267C11.736 34.5786 11.8827 34.9098 12.117 35.1752C12.3513 35.4406 12.6618 35.6272 13.0061 35.7096ZM16.9999 23.994C15.5307 23.994 14.1217 23.4104 13.0829 22.3715C12.044 21.3327 11.4604 19.9236 11.4604 18.4545C11.4604 16.9853 12.044 15.5763 13.0829 14.5374C14.1217 13.4985 15.5307 12.9149 16.9999 12.9149C18.4691 12.9149 19.8781 13.4985 20.917 14.5374C21.9559 15.5763 22.5395 16.9853 22.5395 18.4545C22.5395 19.9236 21.9559 21.3327 20.917 22.3715C19.8781 23.4104 18.4691 23.994 16.9999 23.994Z" fill={color} />
    </svg>
  )
}

export default IconSettings