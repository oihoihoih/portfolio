import { Component, OnInit } from '@angular/core';

declare var Blotter: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  changeText!: boolean;

  constructor() {
    this.changeText = Math.random() < 0.5;
    console.log('changeText',this.changeText);
  }

  ngOnInit(): void {
    this.blotText();
  }
  blotText() {
    // Graphic designer
    var graphic = document.getElementById('graph');
    var web = document.getElementById('web');

    var text = new Blotter.Text('GRAPHIC DESIGNER', {
      family: 'Poppins',
      size: 100,
      fill: '#000',
      paddingLeft: 80,
      paddingRigth: 80,
      paddingTop: 30,
      paddingBottom: 30,
    });

    var material = new Blotter.ChannelSplitMaterial();
      material.uniforms.uOffset.value = 0.05;
      material.uniforms.uRotation.value = 50;
      material.uniforms.uApplyBlur.value = 1;
      material.uniforms.uAnimateNoise.value = 0.3;

    var blotter = new Blotter(material, { texts: text });

    var scope = blotter.forText(text);

    console.log('scope1:', scope);

    scope.appendTo(graphic);

    // Add mousemove effect
    document.onmousemove = moveIt;

    function moveIt(event: any) {
      material.uniforms.uRotation.value = event.clientX * 0.1;
      material.uniforms.uOffset.value = event.clientX * 0.00005;
    }

    // Frontend developer
    var web = document.getElementById('web');

    var textFront = new Blotter.Text(`FRONTEND DEVELOPER`, {
      family: 'Poppins',
      size: 100,
      leading: 1,
      fill: '#454ade',
      weight: 700,
      paddingLeft: 80,
      paddingRigth: 80,
      paddingTop: 80,
      paddingBottom: 80,
    });

    var materialFront = new Blotter.LiquidDistortMaterial();
      materialFront.uniforms.uSpeed.value = 0.2;
      materialFront.uniforms.uVolatility.value = 0.09;
      materialFront.uniforms.uSeed.value = 1;

    var blotter = new Blotter(materialFront, { texts: textFront });

    var scope = blotter.forText(textFront);

    console.log('scope:', scope);

    scope.appendTo(document.body);
    scope.appendTo(web);
  }
}
