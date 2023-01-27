import {animate, query, style, transition, trigger} from "@angular/animations";

export const fader = trigger('routeAnimations', [
  transition('* => *', [
    query(':enter', [style({opacity: 0, position: 'relative'})], {
      optional: true,
    }),
    query(
      ':leave',
      [
        style({opacity: 1, position: 'absolute', display: 'none'}),
        animate('0.3s', style({opacity: 0})),
      ],
      {optional: true}
    ),
    query(
      ':enter',
      [
        style({opacity: 0, position: 'relative'}),
        animate('0.3s', style({opacity: 1})),
      ],
      {optional: true}
    ),
  ]),
]);