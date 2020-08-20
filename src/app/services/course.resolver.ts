


import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Ibook} from "../bookfile";
import {Observable} from "rxjs";
import {BookservService} from "./bookserv.service";



@Injectable()
export class CourseResolver implements Resolve<Ibook> {

    constructor(private coursesService:BookservService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ibook> {
        return this.coursesService.findCourseById(route.params['id']);
    }

}

