"use client";

import { Carousel, CarouselNext, CarouselPrevious, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
    const items = [1, 2, 3, 4, 5, 6];

    return (
        <div className="whiteheader flex-center flex-column">
            <h1>
                <span className="rainbow-text2">Хаяг холбох</span>
            </h1>
            <div>
                админаас хаяг авах бол <a className="bluelink-text" href="https://www.youtube.com/">энд дар</a>,
            </div>
            <div className="whiteheader flex-center">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-6xl"
                >
                    <CarouselContent>
                        {items.map((item, index) => (
                            <CarouselItem key={index} className="basis-1/4 p-2"> {/* ammount of carousels 1/4 */}
                                <div>
                                    <Card className="h-60"> {/* this is height for the Card */}
                                        <CardContent className="flex flex-col items-center  h-full">
                                            <div>
                                                <img src="https://www.cargoservice.mn/img/products/zaavar8.jfif" alt={`Image ${item}`} style={{ width: '200px', height:"60%" }}/>
                                                <div className="flexrow justify-start items-center mt-2">
                                                    <Avatar>
                                                        <AvatarImage src="https://www.cargoservice.mn/img/avatars/avatar_18_rounded.gif" />
                                                        <AvatarFallback>Fallback</AvatarFallback>
                                                    </Avatar>
                                                    <a className="bluelink-text ml-2" href="https://www.youtube.com/">Заавар-{item}</a>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext />
                    <CarouselPrevious />
                </Carousel>
            </div>
        </div>
    );
}