export function useMediaQuery() {
  return () => window.matchMedia("(max-width: 768px)").matches;
}

const dekstopView = document.getElementById('desktop-nav');
const mobileView = document.getElementById('mobile-nav');

const checkMediaQuery = useMediaQuery();

function handleResize() {
  const isMobile = checkMediaQuery(); 
  if (isMobile) {
    dekstopView.style.display = 'none';
    mobileView.style.display = 'block';
  } else {
    dekstopView.style.display = 'block';
    mobileView.style.display = 'none';
  }
}

handleResize(); 

window.addEventListener('resize', handleResize);
