import { Label as CesiumLabel, LabelCollection } from "cesium";
import { EventProps, PickCesiumProps } from "../core";
export declare type LabelCesiumProps = PickCesiumProps<CesiumLabel, typeof cesiumProps>;
export declare type LabelOtherProps = EventProps<{
    collection: LabelCollection;
    id: string | undefined;
    primitive: CesiumLabel;
}>;
export declare type LabelProps = LabelCesiumProps & LabelOtherProps;
declare const cesiumProps: readonly ["backgroundColor", "backgroundPadding", "disableDepthTestDistance", "distanceDisplayCondition", "eyeOffset", "fillColor", "font", "heightReference", "horizontalOrigin", "id", "outlineColor", "outlineWidth", "pixelOffset", "pixelOffsetScaleByDistance", "position", "scale", "scaleByDistance", "show", "showBackground", "style", "text", "translucencyByDistance", "verticalOrigin"];
declare const Label: import("../core").CesiumComponentType<CesiumLabel, LabelProps>;
export default Label;
