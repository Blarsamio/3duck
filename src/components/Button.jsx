
const Button = ({name, isBeam = false, containerClass}) => {
    return (
        <button className={`btn ${containerClass}`}>
            {isBeam && (
                <span className='relative flex h-3 w-3 cursor'>
                    <span className='btn-ping'/>
                    <span className='btn-ping_dot'/>
                </span>
            )}
            {name}
        </button>
    )
}
export default Button
