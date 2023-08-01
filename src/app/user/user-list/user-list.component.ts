import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from 'src/app/types/User';
import { GlobalLoaderComponent } from 'src/app/core/global-loader/global-loader.component';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})

//Tuk kudeto iskame da fetchnem dannite , si importvame Userservica, skoito da mojem da go napravim,
//zatova 6te ni trqbva pak Oninit i construktora
export class UserListComponent implements OnInit {
  //suzdavam e edin userList ot tip User, na koito default stoinost da bude prazen list
  userList: User[] = [];
  constructor(
    private userService: UserServiceService,
    private globalLoaderService: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.globalLoaderService.showLoader();
    //tova ni vru6ta edin observable, na koito mu kazvame subscribe, za da se subscribnem kum resultata i da go zapi6em kum na6ata promenliva

    setTimeout(() => {
      this.userService.fetchUsers().subscribe((users) => {
        this.userList = users;
        this.globalLoaderService.hideLoader();
      });
    }, 3000);
  }
}
