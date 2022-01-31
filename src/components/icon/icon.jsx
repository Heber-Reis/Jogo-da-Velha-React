function Icon ({iconName, size, link}) {
  return(
    <a href={link} target="_blank">
      <img src={`/icons/${iconName}.svg`} width={size} />
    </a>
  )
}

Icon.defaulProps = {
  size: "30px"
}

export default Icon;