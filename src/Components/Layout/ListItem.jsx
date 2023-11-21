function ListItem({className, linkClasName, link, title}) {
  return (
    <li className={className}>
      <a className={linkClasName} href={link}>
        {title}
      </a>
    </li>
  );
}
export default ListItem;
