import { Injectable } from '@angular/core';
import { Personne } from '../cvTech/Model/personne';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheServiceService {
  private PersonnesEmb: Personne[] = [];
  constructor(private toastr: ToastrService) {}

  Embaucher(personne: Personne) {
    if (this.PersonnesEmb.indexOf(personne) < 0)
      this.PersonnesEmb.push(personne);
    else this.toastr.success('this person is already hired');
  }

  getEmbauches(): Personne[] {
    return this.PersonnesEmb;
  }
  Debaucher(personne) {
    if (this.PersonnesEmb.indexOf(personne) >= 0)
      this.PersonnesEmb.splice(this.PersonnesEmb.indexOf(personne), 1);
  }
}
