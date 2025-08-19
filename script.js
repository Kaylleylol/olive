// Load the manifest of images
fetch('manifest.json')
  .then(response => response.json())
  .then(images => {
    const gallery = document.getElementById('gallery');
    images.forEach(img => {
      const el = document.createElement('img');
      el.src = `olive/${img}`;
      gallery.appendChild(el);
    });
  })
  .catch(err => {
    console.error("Could not load images:", err);
  });
