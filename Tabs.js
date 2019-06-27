
class TabLink{
    constructor(element){
      this.element = element;
      this.data = this.element.dataset.tab;
      this.content = document.querySelector(`.content[data-tab='${this.data}']`);

      this.element.addEventListener('click', () => this.selectContent());

    }
    
    selectContent(){
      const contentList = document.querySelectorAll(".content");
      contentList.forEach(content => content.classList.remove("showup"));
      this.content.classList.toggle("showup");

      const linkList = document.querySelectorAll(".link");
      linkList.forEach(link => link.classList.remove("link-highlight"));
      this.element.classList.toggle("link-highlight");
      
    }

  }


const links = document.querySelectorAll(".link");

links.forEach(link=> new TabLink(link));
