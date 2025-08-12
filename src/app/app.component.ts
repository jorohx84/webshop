import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { firebaseApp$ } from '@angular/fire/app';
import { getDocs, updateDoc, doc } from 'firebase/firestore';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webshop';
  firestore = inject(Firestore);

  products = [
    // Dining
    {
      name: "Esstisch Eiche",
      subtitle: "Massivholz mit Metallgestell",
      description: "Stilvoller Esstisch für 6 Personen mit robuster Eichenplatte und schwarzem Gestell.",
      price: 499.99,
      category: "dining",
      liked: false
    },
    {
      name: "Esszimmerstuhl Lina",
      subtitle: "Gepolsterter Stoffstuhl",
      description: "Moderner Stuhl mit Samtbezug und Holzbeinen – komfortabel und elegant.",
      price: 89.99,
      category: "dining",
      liked: false
    },
    {
      name: "Sideboard Oslo",
      subtitle: "Skandinavisches Design",
      description: "Schlichtes Sideboard mit 3 Türen aus hellem Holz, ideal für das Esszimmer.",
      price: 299.00,
      category: "dining",
      liked: false
    },
    {
      name: "Barhocker Urban",
      subtitle: "Industriedesign",
      description: "Verstellbarer Barhocker aus Metall und Holz, perfekt für moderne Küchenbars.",
      price: 119.50,
      category: "dining",
      liked: false
    },
    {
      name: "Buffet Milano",
      subtitle: "Mit Glasvitrine",
      description: "Großes Buffet mit Glaseinsatz für Geschirr, Weiß lackiert mit Eiche-Akzenten.",
      price: 649.99,
      category: "dining",
      liked: false
    },
    {
      name: "Essgruppe Verona",
      subtitle: "Tisch mit 4 Stühlen",
      description: "Komplettset für das Esszimmer in heller Wildeiche, platzsparend und modern.",
      price: 799.00,
      category: "dining",
      liked: false
    },
    {
      name: "Bank Loft",
      subtitle: "Mit Stauraum",
      description: "Sitzbank aus Massivholz mit aufklappbarem Sitz – ideal für kleinere Essbereiche.",
      price: 229.90,
      category: "dining",
      liked: false
    },
    {
      name: "Vitrinenschrank Clara",
      subtitle: "Landhausstil",
      description: "Hoher Schrank mit Glastüren und Schubladen – perfekt für Geschirr oder Deko.",
      price: 389.00,
      category: "dining",
      liked: false
    },
    {
      name: "Servierwagen Retro",
      subtitle: "Mit Rollen",
      description: "Kleiner Küchenwagen im Retro-Stil, mit Ablagen und Rollen für mobile Nutzung.",
      price: 139.00,
      category: "dining",
      liked: false
    },
    {
      name: "Wandregal Cube",
      subtitle: "Set aus 3 Teilen",
      description: "Dekoratives Regalset in Würfelform aus Eiche – ideal für das Esszimmer.",
      price: 59.95,
      category: "dining",
      liked: false
    },

    // Living
    {
      name: "Sofa Lino",
      subtitle: "3-Sitzer mit Stoffbezug",
      description: "Bequemes Sofa mit weichem Bezug und losen Kissen – perfekt fürs Wohnzimmer.",
      price: 749.00,
      category: "living",
      liked: false
    },
    {
      name: "Wohnwand Cube",
      subtitle: "Modulares System",
      description: "Moderne Wohnwand in Weiß mit offenen und geschlossenen Fächern.",
      price: 899.00,
      category: "living",
      liked: false
    },
    {
      name: "Couchtisch Nova",
      subtitle: "Mit Glasplatte",
      description: "Design-Tisch mit Glasplatte und Metallgestell – edel und funktional.",
      price: 179.00,
      category: "living",
      liked: false
    },
    {
      name: "TV-Board Metro",
      subtitle: "Breit und flach",
      description: "TV-Möbel mit Kabelkanal und Schubladen in dunkler Eiche.",
      price: 269.00,
      category: "living",
      liked: false
    },
    {
      name: "Relaxsessel Hugo",
      subtitle: "Verstellbar mit Hocker",
      description: "Drehbarer Sessel mit Lederoptik und Fußhocker – ideal zum Entspannen.",
      price: 399.00,
      category: "living",
      liked: false
    },
    {
      name: "Regal Loft",
      subtitle: "Offenes Bücherregal",
      description: "Loft-Regal aus Metall und Holz – rustikal und modern zugleich.",
      price: 219.50,
      category: "living",
      liked: false
    },
    {
      name: "Beistelltisch Luma",
      subtitle: "Rund, Metall",
      description: "Kleiner Beistelltisch in Goldoptik – dekorativ und praktisch.",
      price: 59.90,
      category: "living",
      liked: false
    },
    {
      name: "Kommode Oslo",
      subtitle: "Mit 4 Schubladen",
      description: "Schlichte Kommode im nordischen Stil mit viel Stauraum.",
      price: 329.00,
      category: "living",
      liked: false
    },
    {
      name: "Sitzsack Chill",
      subtitle: "Großformat",
      description: "Bequemer Sitzsack in verschiedenen Farben – perfekt für Wohnzimmer oder Jugendzimmer.",
      price: 119.00,
      category: "living",
      liked: false
    },
    {
      name: "Hängeregal Ivy",
      subtitle: "Metallrahmen",
      description: "Stylisches Wandregal mit Holzablagen und schwarzem Rahmen.",
      price: 49.00,
      category: "living",
      liked: false
    },

    // Bedroom
    {
      name: "Bettgestell Luna",
      subtitle: "160x200 cm, Holz",
      description: "Massives Bettgestell in Eiche mit schwebender Optik und Kopfteil.",
      price: 599.00,
      category: "bedroom",
      liked: false
    },
    {
      name: "Nachttisch Juno",
      subtitle: "2 Schubladen",
      description: "Kompakter Nachttisch mit Push-to-Open Mechanismus, matt weiß lackiert.",
      price: 129.00,
      category: "bedroom",
      liked: false
    },
    {
      name: "Kleiderschrank Maxi",
      subtitle: "3-türig mit Spiegel",
      description: "Geräumiger Schrank mit Spiegeltür, Kleiderstange und Einlegeböden.",
      price: 849.00,
      category: "bedroom",
      liked: false
    },
    {
      name: "Kommode Elva",
      subtitle: "Mit Soft-Close",
      description: "Moderne Schlafzimmerkommode mit 6 Schubladen und viel Platz.",
      price: 399.00,
      category: "bedroom",
      liked: false
    },
    {
      name: "Schminktisch Belle",
      subtitle: "Mit Spiegel & Licht",
      description: "Eleganter Schminktisch mit LED-Spiegel und Stauraum.",
      price: 259.00,
      category: "bedroom",
      liked: false
    },
    {
      name: "Bettbank Velvet",
      subtitle: "Mit Stauraum",
      description: "Gepolsterte Bank für das Fußende – samtig weich und praktisch.",
      price: 179.00,
      category: "bedroom",
      liked: false
    },
    {
      name: "Garderobe Nora",
      subtitle: "Für Schlafzimmer oder Flur",
      description: "Standgarderobe mit Ablage und Haken, ideal für kleine Räume.",
      price: 89.00,
      category: "bedroom",
      liked: false
    },
    {
      name: "Spiegel Frame",
      subtitle: "Ganzkörperspiegel",
      description: "Schlichter Standspiegel mit schwarzem Metallrahmen.",
      price: 99.99,
      category: "bedroom",
      liked: false
    },
    {
      name: "Teppich Cozy",
      subtitle: "160x230 cm",
      description: "Weicher Hochflor-Teppich in Beige für ein gemütliches Schlafzimmer.",
      price: 119.00,
      category: "bedroom",
      liked: false
    },
    {
      name: "Nachttischleuchte Glow",
      subtitle: "Mit Touch-Funktion",
      description: "Moderne LED-Tischlampe mit Dimmfunktion und USB-Anschluss.",
      price: 59.00,
      category: "bedroom",
      liked: false
    }
  ];

  async logProducts() {
    const docRef = collection(this.firestore, "products")
    for (let index = 0; index < this.products.length; index++) {
      const product = this.products[index];
      await addDoc(docRef, product)
    }

  }

  async addKeystoProduct() {
    const docRef = collection(this.firestore, "products");
    const snapshot = await getDocs(docRef)
    // for (let index = 0; index < snapshot.docs.length; index++) {
    //   const docsnap = snapshot.docs[index];
    //   const ref = doc(this.firestore, "products", docsnap.id)
    //   await updateDoc(ref, {
    //     imagePath:'',
    //   });


    // }
    const products = snapshot.docs.map(docSnap => {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      }
    })
    console.log(products);


  }

  constructor() {
    // this.addKeystoProduct();
  }

}
