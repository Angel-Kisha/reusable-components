// Sample data for FAQs
const faqData = [
    {
      question: "依頼してからどれくらいでスタートできますか？",
      answer: "ダミーテキストです。ダミーテキストです。ダミーテキストです。"
    },
    {
      question: "サービスの料金はどれくらいですか？",
      answer: "ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。"
    },
    {
        question: "サービスの料金はどれくらいですか？",
        answer: "ダミーテキストです。ダミーテキストです。ダミーテキストです。"
      },
    // Add more FAQs as needed
  ];
  
  const faqList = document.querySelector('.faq-list');
  
  // Function to generate FAQ items
  faqData.forEach((faq) => {
    const faqItem = document.createElement('li');
    faqItem.classList.add('faq-item');
    faqItem.innerHTML = `
      <div class="faq-wrap">
        <div class="faq-content question">
          <span class="q-icon">Q</span>
          <h4>${faq.question}</h4>
          <span class="toggle-icon"></span>
        </div>
        <div class="faq-content answer">
          <span class="a-icon">A</span>
          <p>${faq.answer}</p>
        </div>
      </div>
    `;
    faqList.appendChild(faqItem);
  });
  
  // Function to toggle FAQ answers
  document.querySelectorAll('.faq-content.question').forEach((question) => {
    question.addEventListener('click', function() {
      const answer = this.closest('.faq-wrap').querySelector('.answer');
      
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.paddingTop = null;
        answer.style.paddingBottom = null;
        question.classList.remove('active');
      } else {
        const paddingHeight = 40; 
        answer.style.maxHeight = (answer.scrollHeight + paddingHeight) + "px"; 
        answer.style.paddingTop = "20px";  
        answer.style.paddingBottom = "20px";  
        question.classList.add('active');
      }
    });
  });

// ACCORDION JS
  function toggleAccordion(button) {
    const accordionItem = button.parentElement;
  
    // Toggle open state
    accordionItem.classList.toggle('open');
    
    // Close other sections
    const allItems = document.querySelectorAll('.accordion-item');
    allItems.forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove('open');
      }
    });
  }
  
  
//   TAB
function showTab(event, tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  }
  
//   DROPDOWN
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    // Toggle the display between 'block' and 'none'
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
      dropdownMenu.style.display = 'block';
    } else {
      dropdownMenu.style.display = 'none';
    }
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      const dropdownMenu = document.getElementById('dropdownMenu');
      dropdownMenu.style.display = 'none';
    }
  };
  
  

  
//SLIDER1
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slider .slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

