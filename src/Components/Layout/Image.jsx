

function Image({className, src, alt, imgClassName,testt}) {
  return (
    <div className={className}>
      <picture>
        <img onClick={testt} src={src} alt={alt} className={imgClassName} />
      </picture>
    </div>
  );
}

export default Image;
