const changeTheme = () => {
  // console.log(document.getElementsByTagName("html"));

  // document.getElementsByTagName("html").setAttribute("data-theme", "dark");

  var currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

}

export default changeTheme;