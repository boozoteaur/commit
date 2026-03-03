import './../css/Padding.css'

export const Padding = ({
    children = null,
    ...props
}) => {
    return (
        <div className='padding'  {...props}>
            {children}
        </div>
    )
}