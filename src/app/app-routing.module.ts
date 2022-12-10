import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PostsComponent } from './posts/posts.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { PipeableComponent } from './pipeable/pipeable.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SchedulerArgumentComponent } from './scheduler-argument/scheduler-argument.component';
import { ArrayargumentsComponent } from './arrayarguments/arrayarguments.component';
import { LatestfromComponent } from './latestfrom/latestfrom.component';
import { AllLifeCycleComponent } from './all-life-cycle/all-life-cycle.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
import { ProgramsComponent } from './programs/programs.component';
const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },

  {
    path: 'index',

    component: IndexComponent,
    children: [
      {path: 'post', component: PostsComponent },
    {path: 'newcourse', component: NewCourseFormComponent },
    {path: 'signup', component: SignupFormComponent },
    {path: 'contactform', component: ContactFormComponent },
    {path: 'observable', component: ObservableComponent },
    {path: 'subject', component: SubjectComponent },
    {path: 'pipeable', component: PipeableComponent },
    {path: 'scheduler', component: SchedulerComponent },
    {path: 'schedulerargument', component: SchedulerArgumentComponent },
    {path: 'arrayargument', component: ArrayargumentsComponent },
    {path: 'latestfrom', component: LatestfromComponent },
    {path: 'lifecycles', component: AllLifeCycleComponent },
    {path: 'view-encapsulation', component: ShadowDomComponent },
    {path: 'content-projection', component: ContentProjectionComponent },
    {path: 'dynamic-component', component: DynamicComponentComponent },
    {path: 'directive', component: DirectivesComponent },
    {path: 'template-reference-variable', component: TemplatereferencevariableComponent },
    {path: 'programs', component: ProgramsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
