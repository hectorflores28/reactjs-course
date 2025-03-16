const StaticComponent = () => {
    const items = ["ReactJS","TailwindCSS","Chakra UI"];

    return (
        <ul>
                 {items.map((item, index) => (
                    <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default StaticComponent;