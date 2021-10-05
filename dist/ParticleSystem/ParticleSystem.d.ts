import { ParticleSystem as CesiumParticleSystem } from "cesium";
import { PickCesiumProps, ConstructorOptions, Merge } from "../core";
declare type Target = Merge<CesiumParticleSystem, ConstructorOptions<typeof CesiumParticleSystem>>;
export declare type ParticleSystemCesiumProps = PickCesiumProps<CesiumParticleSystem, typeof cesiumProps>;
export declare type ParticleSystemCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps>;
export declare type ParticleSystemCesiumEvents = {
    onComplete?: () => void;
    onUpdate?: CesiumParticleSystem.updateCallback;
};
export declare type ParticleSystemProps = ParticleSystemCesiumProps & ParticleSystemCesiumReadonlyProps & ParticleSystemCesiumEvents;
declare const cesiumProps: readonly ["show", "emitter", "modelMatrix", "emitterModelMatrix", "emissionRate", "bursts", "loop", "startScale", "endScale", "startColor", "endColor", "image", "imageSize", "minimumImageSize", "maximumImageSize", "speed", "minimumSpeed", "maximumSpeed", "lifetime", "particleLife", "minimumParticleLife", "maximumParticleLife", "mass", "minimumMass", "maximumMass", "sizeInMeters"];
declare const cesiumReadonlyProps: readonly ["color", "imageSize", "speed", "scale", "particleLife", "mass"];
export declare const cesiumEventProps: {
    readonly onComplete: "complete";
    readonly onUpdate: "updateCallback";
};
declare const ParticleSystem: import("../core").CesiumComponentType<CesiumParticleSystem, ParticleSystemProps>;
export default ParticleSystem;
