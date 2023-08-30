import * as React from 'react';
import { cn } from '../utils';
import { type SvgProps } from './types';

export function Globe({ width = '15', fill = '#393939', className }: SvgProps) {
  return (
    <svg
      width={width}
      height={width}
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.2417 5.26829C4.17961 5.4235 3.69842 5.50111 3.50439 5.4623L4.00887 5.69512C4.0218 5.64338 4.17961 5.4235 4.2417 5.26829Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M3.69767 5.50877L3.98925 5.64333C3.99473 5.6329 4.00124 5.62132 4.00841 5.60896C4.02136 5.58662 4.03721 5.56052 4.05417 5.53256C4.06053 5.52208 4.06705 5.51134 4.07364 5.50044C4.09058 5.47239 4.10803 5.44316 4.12484 5.41385C4.06801 5.43972 4.00054 5.46042 3.93097 5.47593C3.85443 5.49299 3.77304 5.50425 3.69767 5.50877ZM4.20567 5.25388C4.19564 5.27894 4.16499 5.3074 4.11021 5.33485C4.05713 5.36144 3.9884 5.38361 3.91408 5.40018C3.76436 5.43355 3.60155 5.44216 3.512 5.42425L3.48813 5.49754L4.03515 5.74999L4.04651 5.70453C4.04701 5.70254 4.04917 5.69671 4.05469 5.68575C4.05986 5.67548 4.06689 5.6628 4.07554 5.6479C4.08808 5.62628 4.1033 5.60119 4.1201 5.57352C4.12655 5.5629 4.13322 5.5519 4.14007 5.54057C4.18866 5.46013 4.24532 5.36372 4.27773 5.2827L4.20567 5.25388Z'
        fill={fill}
      />
      <path
        d='M4.27925 6.87949C4.33551 6.72206 4.81347 6.62656 5.00881 6.6581L4.496 6.44426C4.485 6.49645 4.33551 6.72206 4.27925 6.87949Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.81393 6.61888L4.51754 6.49529C4.51245 6.50591 4.50638 6.51773 4.49967 6.53035C4.48756 6.55316 4.4727 6.57983 4.45679 6.6084C4.45082 6.61911 4.44471 6.63008 4.43854 6.64122C4.42265 6.66989 4.40631 6.69975 4.39061 6.72967C4.44643 6.7017 4.51308 6.67849 4.58203 6.6604C4.65787 6.64049 4.73879 6.6262 4.81393 6.61888ZM4.31579 6.89254C4.32488 6.86712 4.35446 6.83754 4.40817 6.80807C4.46022 6.77952 4.52807 6.7548 4.60173 6.73547C4.75009 6.69653 4.91247 6.68185 5.00263 6.69641L5.02375 6.62228L4.46769 6.39041L4.45803 6.43626C4.45761 6.43827 4.45566 6.44418 4.45055 6.45534C4.44577 6.46579 4.43922 6.47872 4.43114 6.49394C4.41941 6.51602 4.40513 6.54165 4.38938 6.56993C4.38333 6.58078 4.37707 6.59202 4.37066 6.6036C4.3251 6.6858 4.27207 6.78426 4.24271 6.86643L4.31579 6.89254Z'
        fill={fill}
      />
      <path
        d='M5.03934 6.15991C4.87741 6.11834 4.73842 5.6512 4.7519 5.4538L4.58602 5.98404C4.639 5.9902 4.87741 6.11834 5.03934 6.15991Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.73073 5.65144L4.63486 5.95791C4.64591 5.962 4.65823 5.96696 4.67141 5.97248C4.69523 5.98245 4.72316 5.99479 4.75308 6.00801C4.76429 6.01297 4.77578 6.01805 4.78744 6.02317C4.81744 6.03636 4.84869 6.0499 4.87992 6.06278C4.84694 6.00977 4.81772 5.94554 4.79337 5.87855C4.76658 5.80485 4.74492 5.72559 4.73073 5.65144ZM5.04898 6.12232C5.02283 6.11561 4.99066 6.08888 4.95638 6.03809C4.92317 5.9889 4.89232 5.9236 4.86631 5.85204C4.81392 5.70788 4.7844 5.54755 4.79061 5.45645L4.71487 5.44222L4.535 6.01718L4.58154 6.02259C4.58359 6.02282 4.58965 6.02422 4.60123 6.02828C4.61208 6.03208 4.62556 6.03742 4.64145 6.04407C4.66451 6.05372 4.69135 6.06558 4.72096 6.07867C4.73232 6.08369 4.74409 6.0889 4.75621 6.09422C4.84225 6.13204 4.94517 6.1758 5.02969 6.19749L5.04898 6.12232Z'
        fill={fill}
      />
      <path
        d='M3.44471 6.0185C3.60807 6.05399 3.76439 6.51563 3.75829 6.71339L3.90427 6.17733C3.8511 6.17315 3.60807 6.05399 3.44471 6.0185Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M3.77207 6.51511L3.85644 6.20527C3.84525 6.20159 3.83275 6.19709 3.81937 6.19207C3.79519 6.183 3.76682 6.17171 3.73643 6.15961C3.72504 6.15507 3.71337 6.15043 3.70153 6.14574C3.67105 6.13368 3.63933 6.12132 3.60763 6.10961C3.64257 6.16136 3.67417 6.22445 3.701 6.29049C3.73052 6.36314 3.75512 6.44153 3.77207 6.51511ZM3.43647 6.05642C3.46286 6.06215 3.496 6.08767 3.53215 6.13714C3.56718 6.18506 3.60044 6.24916 3.6291 6.3197C3.68683 6.4618 3.72232 6.62092 3.7195 6.71219L3.79573 6.72359L3.95402 6.14232L3.9073 6.13865C3.90525 6.13849 3.89915 6.13732 3.88742 6.13369C3.87644 6.1303 3.86277 6.12547 3.84663 6.11941C3.82323 6.11063 3.79597 6.09978 3.76589 6.0878C3.75435 6.08321 3.7424 6.07845 3.73009 6.07358C3.6427 6.039 3.53821 5.99911 3.45294 5.98058L3.43647 6.05642Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10.0087 1.7395C8.92446 7.34083 11.6953 9.98951 13.0442 10.5023L12.7458 11.2874C10.9644 10.6102 8.03307 7.52635 9.18408 1.57989L10.0087 1.7395Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.5 13.039C10.5597 13.039 13.04 10.5588 13.04 7.49951C13.04 4.44019 10.5597 1.96 7.5 1.96C4.44027 1.96 1.96 4.44019 1.96 7.49951C1.96 10.5588 4.44027 13.039 7.5 13.039ZM7.5 13.999C11.0899 13.999 14 11.0891 14 7.49951C14 3.90993 11.0899 1 7.5 1C3.91015 1 1 3.90993 1 7.49951C1 11.0891 3.91015 13.999 7.5 13.999Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M13.4747 5.35781C7.56084 8.8739 3.20255 6.51641 1.59625 4.74407L2.15197 4.24041C3.54666 5.77926 7.51872 8.0264 13.0914 4.71315L13.4747 5.35781Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M5.58619 10.8634C3.64788 10.4926 2.30713 9.61674 1.11139 8.75431L1.55012 8.14602C2.72154 8.99091 3.95364 9.78748 5.72711 10.1268C7.50429 10.4668 9.86485 10.3541 13.2886 9.29481L13.5103 10.0113C10.011 11.0939 7.5208 11.2335 5.58619 10.8634Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.50815 11.7248C4.56725 12.0095 4.62675 12.2961 4.68122 12.5882L3.85556 12.7422C3.80687 12.4811 3.75134 12.2151 3.69457 11.9432C3.44823 10.7633 3.17849 9.4713 3.34221 7.97909C3.54621 6.11971 4.4102 3.97536 6.67625 1.23252L7.32375 1.76746C5.12928 4.42366 4.35833 6.41879 4.17709 8.07069C4.02927 9.41798 4.26531 10.555 4.50815 11.7248Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.32228 8.3483C7.67953 10.4717 8.63545 12.2683 9.39213 13.2671L8.72267 13.7743C7.89553 12.6825 6.87668 10.7621 6.49403 8.48764C6.10972 6.2034 6.36611 3.54738 8.11906 1.03307L8.80804 1.51342C7.20528 3.8123 6.96669 6.23475 7.32228 8.3483Z'
        fill={fill}
      />
      <path d='M12.2725 10.1575H12.8158V10.5455H12.2725V10.1575Z' fill={fill} />
      <path
        d='M2.84061 9.16831C2.80021 9.15119 2.76214 9.13127 2.7279 9.10987L2.84061 9.16831C3.09329 9.27542 3.4371 9.27314 3.50402 8.83825C3.50402 9.28526 3.46127 9.4591 3.46127 9.49014L2.84061 9.16831Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M2.82076 9.21047L3.50783 9.56674V9.49023C3.50783 9.49023 3.50785 9.4895 3.50808 9.48731L3.50925 9.47782L3.51403 9.44473C3.51809 9.41671 3.52353 9.37743 3.52896 9.32498C3.53982 9.22009 3.55058 9.06327 3.55058 8.83825L3.45799 8.83117C3.42662 9.03507 3.33334 9.12735 3.22739 9.16231C3.11698 9.19874 2.98102 9.17693 2.86043 9.12613L2.74933 9.06853L2.70322 9.14936C2.73908 9.17177 2.77875 9.19256 2.82076 9.21047ZM3.25657 9.25075C3.21967 9.26293 3.18135 9.26984 3.14252 9.27241L3.42375 9.41823C3.42741 9.3923 3.43186 9.35846 3.43632 9.31538C3.4419 9.26151 3.44751 9.19298 3.45154 9.10735C3.39986 9.17905 3.33283 9.22559 3.25657 9.25075Z'
        fill={fill}
      />
      <path
        d='M4.00958 9.07105C3.97729 9.29847 4.09417 9.74533 4.44033 9.906C4.51318 9.92281 4.59008 9.94196 4.66938 9.96358C4.58393 9.95775 4.50778 9.93731 4.44033 9.906C4.12094 9.8323 3.87939 9.80358 3.85458 9.80842L4.00958 9.07105Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.45564 9.86174C4.5276 9.87841 4.60345 9.89734 4.68163 9.91866L4.66621 10.01C4.57701 10.0039 4.49678 9.98286 4.42523 9.9503C4.26862 9.9143 4.13125 9.88925 4.02996 9.87379C3.97879 9.86598 3.93709 9.86065 3.90695 9.85759C3.89183 9.85605 3.88 9.85512 3.87151 9.85471C3.86486 9.85439 3.86176 9.85446 3.86176 9.85446L3.79457 9.86755L3.96401 9.06147L4.05568 9.0776C4.04093 9.18152 4.06016 9.34149 4.12586 9.49526C4.19073 9.64711 4.29838 9.78714 4.45564 9.86174ZM4.22792 9.81355C4.1449 9.73176 4.08328 9.63265 4.04022 9.53185C4.0198 9.48406 4.00334 9.43541 3.99066 9.38741L3.91141 9.76444L3.91637 9.76493C3.94847 9.7682 3.99178 9.77375 4.04402 9.78173C4.0967 9.78977 4.15874 9.80032 4.22792 9.81355Z'
        fill={fill}
      />
    </svg>
  );
}
