// 12. 게임 캐릭터 클래스 만들기
const Wizard = class Wizard{
    constructor(health, mana, armor){
      this.health = health;
      this.mana = mana;
      this.armor = armor;
    }
    atteck(){
      console.log('파이어볼');
    }
  }
  
  const x = new Wizard(545, 201, 10);
  console.log(x.health, x.mana, x.armor);//545 201 10
  x.attack();//'파이어볼'