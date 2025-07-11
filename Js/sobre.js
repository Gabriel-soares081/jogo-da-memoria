function carousel(direction) {
  const devs = ['adrielly', 'ewerton','gabriel', 'tyler', 'ian']
  

  for (let dev of devs) {
    const devElement = document.getElementById(dev)

    if (devElement.style.display === 'block') {
      currentDevs.push(devs.indexOf(dev))
    } 
  }

  let nextDevs = []

  if (direction === 'next' && !currentDevs.includes(0)) {
    for (let i = 0; i < currentDevs.length; i++) {
      nextDevs.push(currentDevs[i] - 1)
    }
  } else if (direction === 'prev' && !currentDevs.includes(devs.length - 1)) {
    for (let i = 0; i < currentDevs.length; i++) {
      nextDevs.push(currentDevs[i] + 1)
    }
  } else {
    return
  }

  for (let dev of devs) {
    const devElement = document.getElementById(dev)
    
    if (nextDevs.includes(devs.indexOf(dev))) {
      devElement.style.display = 'block'
    } else {
      devElement.style.display = 'none'
    }
  }
}

function sumir(name){
  const element = document.getElementById(name)

  const a = element.firstChild

  if (a.children[0].style.display != 'none') {
    a.children[0].style.display = 'none'
    a.children[1].style.display = 'block'
  } else {
    a.children[0].style.display = 'block'
    a.children[1].style.display = 'none'
  }
 
}