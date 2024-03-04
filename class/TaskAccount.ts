import { DioAccount } from "./DioAccount"

export class TaskAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
      this.balance += value + 10
      console.log('Voce depositou')
  }
}