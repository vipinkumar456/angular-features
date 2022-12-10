import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BeforebootstrapComponent } from './beforebootstrap/beforebootstrap.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule  } from '@angular/common/http';
import { PostService } from './post.service';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { PipeableComponent } from './pipeable/pipeable.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SchedulerArgumentComponent } from './scheduler-argument/scheduler-argument.component';
import { ArrayargumentsComponent } from './arrayarguments/arrayarguments.component';
import { LatestfromComponent } from './latestfrom/latestfrom.component';
import { AllLifeCycleComponent } from './all-life-cycle/all-life-cycle.component';
import { MainComponent } from './all-life-cycle/main/main.component';
import { SubmainComponent } from './all-life-cycle/submain/submain.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { NoEncapsulationComponent } from './no-encapsulation/no-encapsulation.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ContentProductComponent } from './content-product/content-product.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DynamicSubComponent } from './dynamic-sub/dynamic-sub.component';
import { HighlightDirective } from './highlight.directive';
import { DirectivesComponent } from './directives/directives.component';
import { PlaceholderdirectiveDirective } from './placeholderdirective.directive';
import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
import { ProgramsComponent } from './programs/programs.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    PanelComponent,
    ContactFormComponent,
    BeforebootstrapComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    HeaderComponent,
    IndexComponent,
    ObservableComponent,
    SubjectComponent,
    PipeableComponent,
    SchedulerComponent,
    SchedulerArgumentComponent,
    ArrayargumentsComponent,
    LatestfromComponent,
    AllLifeCycleComponent,
    MainComponent,
    SubmainComponent,
    ViewEncapsulationComponent,
    NoEncapsulationComponent,
    ShadowDomComponent,
    ContentProjectionComponent,
    ContentProductComponent,
    DynamicComponentComponent,
    HighlightDirective,
    DirectivesComponent,
    PlaceholderdirectiveDirective,
    TemplatereferencevariableComponent,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  entryComponents:[DynamicSubComponent],
  providers: [
    CoursesService,
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
