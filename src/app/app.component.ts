import { Component } from '@angular/core';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      id:string;
      name:string;
      cansave:true;
      
      title = 'Angular App';
      courses=[{ id:1,name:'vipin'},
              { id:2,name:'rites'},
              ];
      viewMode = "map";
      post= {
      tit :"title",
      isFavorite:true
    }
    onFavoriteChanged(isFavorite:any)
    {
      console.log("changed",isFavorite);
    }
    add()
    {
      const todo=
      {
        
        id:this.id,
        name:this.name
      }
     this.todoadd(todo);
    }
     todoadd(todo:any)
     {
          console.log(todo);
          this.courses.push(todo);
     }
     
    Remove(course:any)
    {
        let index=this.courses.indexOf(course);
        console.log(index);
        this.courses.splice(index,1);
    }
    }
    