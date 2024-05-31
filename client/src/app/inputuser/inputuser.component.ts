import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-inputuser',
  templateUrl: './inputuser.component.html',
  styleUrls: ['./inputuser.component.css']
})
export class InputuserComponent implements OnInit{
  x = '';
  page = '';
  title = '';
  selectedInfo: any;

  ResInf : any;
  role = 'user';
  username = '';
  password = '';
  email = '';
  dataToSend = {};
  button: boolean = false;
  isHidden: boolean = false;
  Id = '';

  constructor (
    private router: Router,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.Id = id;
      this.loadDataID(this.Id);
    }

    const urlParts = this.router.url.split('/');
    const adminRoute = urlParts[2];

    if (adminRoute === 'adduser') {
      this.isHidden = true;
      this.page = 'Thêm người dùng';
    }
    else {
      this.isHidden = false;
      this.page = 'Chỉnh sửa người dùng';
    }
  }

  /// GET VALUE
  onUsernameInputChange(event: any) {
    this.username = event.target.value;
  }

  onPasswordInputChange(event: any) {
    this.password = event.target.value;
  }

  onEmailInputChange(event: any) {
    this.email = event.target.value;
  }

  onRoleChange(event: any) {
    this.role = event.target.value;
  }

  // FUNCTION
  loadDataID(id: string) {
    this.usersService.getbyID(id).subscribe(data => {

      console.log(data)

      this.ResInf = data as any;

      this.username = this.ResInf.name;
      this.role = this.ResInf.role;
      this.email = this.ResInf.email;
      this.password = this.ResInf.pass;
      this.Id = this.ResInf.id;

    });
  }

  add(){
    this.dataToSend = {
      name: this.username,
      pass: this.password,
      email: this.email,
      role: this.role
    };
    this.usersService.addData(this.dataToSend).subscribe(data => {});
  }

  edit() {
    this.dataToSend = {
      name: this.username,
      pass: this.password,
      email: this.email,
      role: this.role
    };
    this.usersService.update(this.Id, this.dataToSend).subscribe(data => {});
  }


}
