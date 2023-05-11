function Button({ title, action, className }) {
    return ( 
        <>
            <button className={className} onClick={action} style={{cursor: 'pointer'}}>{title}</button>
        </>
     );
}

export default Button;