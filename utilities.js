function rando() {
    const names = ['Joanna', 'Sadie', 'Frankie', 'Olivia', 'Amelia', 'Sophie', 'Alex', 'Vikki', 'Jackie', 'Jeff'];
    return {
      get name() {
        return names[Math.floor(Math.random() * names.length)];
      },
    }
}