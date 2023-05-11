function Headline(props) {
  const { headline, className } = props;
  return <h2 className={className}>{headline}</h2>;
}

export default Headline;
