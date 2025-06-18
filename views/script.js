function carousel(direction) {
  const devs = ['adrielly', 'ewerton','gabriel', 'tyler', 'ian']
  const currentDevs = []

  for (let dev of devs) {
    const devElement = document.getElementById(dev)

    if (devElement.style.display === 'block') {
      currentDevs.push(devs.indexOf(dev))
    }
  }

  let nextDevs = []

  if (direction === 'prev' && !currentDevs.includes(0)) {
    for (let i = 0; i < currentDevs.length; i++) {
      nextDevs.push(currentDevs[i] - 1)
    }
  } else if (direction === 'next' && !currentDevs.includes(devs.length - 1)) {
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
