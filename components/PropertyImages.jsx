import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const PropertyImages = ({ images }) => {
  return (
    <Gallery>
      <section className="p-4 bg-blue-50">
        {images && (
          <div className="container mx-auto">
            {images.length == 1 ? (
              <Item
                original={image}
                thumbnail={image}
                width="1000"
                height="600"
              >
                {({ ref, open }) => (
                  <Image
                    src={image}
                    ref={ref}
                    onClick={open}
                    alt=""
                    className="object-cover h-[400px] mx-auto rounded-xl hover:cursor-pointer"
                    width={1800}
                    height={400}
                    priority={true}
                  />
                )}
              </Item>
            ) : (
              <div className="grid grid-cols-2 gap-4 ">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`${
                      images.length === 3 && index === 2
                        ? "col-span-2"
                        : "col-span-1"
                    }`}
                  >
                    <Item
                      original={image}
                      thumbnail={image}
                      width="1000"
                      height="600"
                    >
                      {({ ref, open }) => (
                        <Image
                          src={image}
                          ref={ref}
                          onClick={open}
                          alt=""
                          className="object-cover h-[400px] w-full rounded-xl hover:cursor-pointer"
                          width={0}
                          height={0}
                          sizes="100vw"
                          priority={true}
                        />
                      )}
                    </Item>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </Gallery>
  );
};

export default PropertyImages;
