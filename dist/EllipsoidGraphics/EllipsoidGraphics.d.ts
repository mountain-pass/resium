import { EllipsoidGraphics as CesiumEllipsoidGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type EllipsoidGraphicsCesiumProps = PickCesiumProps<Merge<CesiumEllipsoidGraphics, CesiumEllipsoidGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type EllipsoidGraphicsCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type EllipsoidGraphicsProps = EllipsoidGraphicsCesiumProps & EllipsoidGraphicsCesiumEvents;
declare const cesiumProps: readonly ["heightReference", "radii", "show", "fill", "innerRadii", "material", "maximumClock", "maximumCone", "minimumClock", "minimumCone", "outline", "outlineColor", "outlineWidth", "subdivisions", "stackPartitions", "slicePartitions", "shadows", "distanceDisplayCondition"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const EllipsoidGraphics: import("../core").CesiumComponentType<CesiumEllipsoidGraphics, EllipsoidGraphicsProps>;
export default EllipsoidGraphics;
