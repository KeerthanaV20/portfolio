
// List all unique class names
const classNames = [
    'class1-section1',
    'class2-section1',
    'class3-section1',
    'class4-section1',
    'class1-section2',
    'class2-section2',
    'class3-section2',
    'class4-section2',
    // Add more class names as needed
  ];
  
  // Dynamically select all elements by their class names
  const elementsToObserve = classNames.map(className =>
    document.querySelectorAll(`.${className}`)
  );
  
  // Flatten the NodeList array into a single list of elements
  const elements = Array.from(elementsToObserve).flat();
  
  // Add the 'hidden' class to all elements initially
  elements.forEach(el => el.classList.add('hidden'));
  
  // Create the Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'in-view' class when in the viewport
          entry.target.classList.add('in-view');
          entry.target.classList.remove('hidden');
        } else {
          // Optionally remove the 'in-view' class when out of the viewport
          entry.target.classList.remove('in-view');
          entry.target.classList.add('hidden');
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );
  
  // Observe each element
  elements.forEach(element => observer.observe(element));
  