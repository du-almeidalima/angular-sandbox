import {animate, group, query, style, transition, trigger} from "@angular/animations";

export const fader = trigger('routeAnimations', [
  transition('* => *', [
    // The steps happen sequentially and synchronously. So for this animation the first thing that's done is to hide
    // The new page. You can see in the DevTools that Angular actually render both pages at the same time during transition
    query(
      ':enter',
      [
        style({opacity: .25})
      ],
      {optional: true}
    ),
    // With group, we can run the steps in parallel
    group([
      query(
        ':leave',
        [
          // The style is applied instantly
          style({opacity: 1, position: 'absolute'}),
          // And the animate function will transition from the previous style to the default or the one that was given 
          // as the "style" parameter
          animate('0.3s', style({opacity: 0})),
        ],
        {optional: true}
      ),
      query(
        ':enter',
        [
          style({opacity: .25, position: 'relative'}),
          animate('0.5s', style({opacity: 1})),
        ],
        {optional: true}
      ),
    ]),
  ]),
]);