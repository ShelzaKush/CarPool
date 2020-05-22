import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  menuId = new BehaviorSubject<any>(null);
  $castId = this.menuId.asObservable();
  
  private addclass = new BehaviorSubject<string>('');
  $castCls = this.addclass.asObservable();

  firstId = new BehaviorSubject<any>(null);
  $castfirstId = this.firstId.asObservable();


  popup = new BehaviorSubject<number>(null);
  $popupId = this.popup.asObservable();


  isLoading = new BehaviorSubject<boolean>(true);
  $castLoader = this.isLoading.asObservable();

  isToken = new BehaviorSubject<boolean>(false);
  $castToken = this.isToken.asObservable();

  ValueFirstId = new BehaviorSubject<any>(null);
  $setValueFirstId = this.ValueFirstId.asObservable();

  refreshValue = new BehaviorSubject<any>(false);
  $refreshValuedata = this.refreshValue.asObservable();




  activeMenuId =  new BehaviorSubject<any>(null);
  $activeMenuIddata= this.activeMenuId.asObservable();

  refreshMenu = new BehaviorSubject<any>(false);
  $refreshMenuData = this.refreshMenu.asObservable();





  // setValueFirstId
  constructor() { }
  
  public setMenuId(id: any) {
      // console.log(id);
      return this.menuId.next(id);
  }
  public updateMenuCls(cls: string) {
      return this.addclass.next(cls);
  }


  public setFirstId(id: number) {
      // console.log(id);
      return this.firstId.next(id);
  }

  public settoekn(id: boolean) {
    // console.log(id);
    return this.isToken.next(id);
}


  public setPopUpModel(id: number) {
      // console.log(id);
      return this.popup.next(id);
  }

  public isLoader(bool: boolean) {
      this.isLoading.next(bool);
  }

  public getToken(bool: boolean) {
      this.isToken.next(bool);
  }




  public setValueFirstId(id: any) {
      console.log(id);
     return this.ValueFirstId.next(id);
 }

 public setRefreshVal(val: boolean) {

 return this.refreshValue.next(val);
}

public setactiveMenuId(val: any) {

  return this.activeMenuId.next(val);
}

public setRefreshMenu(val: boolean) {

  return this.refreshMenu.next(val);
}

}